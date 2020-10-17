import React from 'react';
import IPFS from 'ipfs';
import './ProposalList.css';

class ProposalList extends React.Component {
    state = {
        proposals: []
    }

    async componentDidMount() {
        const node = await IPFS.create()
        const stream = node.cat('bafybeialhlpi2y6um4rxswyayq7gsbkqfjx3zhi7djb3znv6he3vzfe4y4')
        let data = ''

        for await (const chunk of stream) {
          // chunks of data are returned as a Buffer, convert it back to a string
          data += chunk.toString()
        }

        console.log(data)
        const proposalsContainer = JSON.parse(data);
        const proposals = proposalsContainer.proposals;
        console.log(proposals);
        this.setState({proposals: proposals});
    }

    render() {
        return(
            <ul>
            {this.state.proposals.map((proposal) => (
                <li key={proposal.source}>
                    <div className="hover_img">
                    <a href="#">{proposal.title}
                        <span>
                            <img alt={proposal.title} src={proposal.image} />
                        </span>
                    </a>
                    </div>
                </li>
            ))}
            </ul>
        )
    }
}

export default ProposalList;
