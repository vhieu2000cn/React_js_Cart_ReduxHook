import { connect } from "react-redux";
import Message from "../components/Message";

function MessageContainer(props) {
    let { message } = props;
    return <Message message={message} />;
}

const mapStateToProps = (state) => {
    return {
        message: state.changeMessage,
    };
};

export default connect(mapStateToProps, null)(MessageContainer);
