pragma solidity ^0.4.17;

contract CampaingFactory {
    address[] public deplpoyedCampaigns;

    function createCampaign(uint256 minimum) public {
        address newCampaign = new Kickstarter(minimum, msg.sender);
        deplpoyedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deplpoyedCampaigns;
    }
}

contract Kickstarter {
    address public manager;

    uint256 public minimumContribution;

    //This represents a stucture for a new Kickstarter campaing
    struct Request {
        string description;
        uint256 value;
        address recepient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    mapping(address => bool) public approvers;
    uint256 approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint256 minimum, address creator) public {
        manager = creator;

        minimumContribution = minimum;
    }

    //this function allows people to contribute to our Kickstarter campaing
    function contribute() public payable {
        require(
            msg.value > minimumContribution,
            "you need to deposit more than 0.1 ether"
        );
        approvers[msg.sender] = true;
        approversCount++;
    }

    //This functions helps manager to create a request on what he wants to spend funds
    function createRequest(
        string description,
        address recepient,
        uint256 value
    ) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recepient: recepient,
            approvalCount: 0,
            complete: false
        });

        requests.push(newRequest);
    }

    //Voting mechanism for deciding whether the participants/contributors allow the spends

    function approveRequest(uint256 index) public {
        Request storage request = requests[index];

        require(
            approvers[msg.sender],
            "You are not among approvers, donate to contract"
        );
        require(!request.approvals[msg.sender], "You have already voted!");

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    //This function helps the  manager close the request based on either approved or rejected outcome

    function finalizeRequest(uint256 index) public restricted {
        Request storage request = requests[index];

        require(!request.complete, "This request has already been complete!");
        require(
            request.approvalCount > (approversCount / 2),
            "Not enough votes to end the voting! "
        );
        request.recepient.transfer(request.value);
        request.complete = true;
    }

    function getSummary()
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            address
        )
    {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint256) {
        return requests.length;
    }
}
