import React from 'react';

class Click extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            time: [10, 30, 1],
            complete: false,
            interval: undefined,
            buttonType: 'some'
        }
    }


    handleClick(some) {
        this.setState({
            interval: setInterval(() => {
                if (this.state.time > 0) {

                    this.setState({ time: this.state.time - 1 })

                } else {
                    this.setState({ complete: true })

                }
            }

                , 1000),


            buttonType: some

        })

        clearInterval(this.state.interval)
    }

    render() {
        return (

            <div>
                <p> Now and then, you should step away from your Homework.</p>

                <button onClick={() => { this.handleClick('Twenty') }}> 10 Minutes</button>
                <button onClick={() => { this.handleClick('Thirty') }}> 30 Minutes</button>
                <button onClick={() => { this.handleClick('Hour') }}> 1 hour</button>

                {
                    this.state.buttonType === 'Twenty' && <p> You have a {this.state.time[0]} minute break. Use this time wisely!</p>

                }

                {
                    this.state.buttonType === 'Thirty' && <p> You have a {this.state.time[1]} minute break. Use this time wisely!</p>
                }

                {
                    this.state.buttonType === 'Hour' && <p> You have {this.state.time[2]} hour on break. Use this time wisely!</p>
                }
            </div>
        );
    }
};


export default Click;