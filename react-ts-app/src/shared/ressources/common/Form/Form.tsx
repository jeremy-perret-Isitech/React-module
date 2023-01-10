import { eventHandler } from "../../../utils/common/EventHandler";

export const Form = (props: any) => {
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const formData = event.target;
        eventHandler(event, formData);

        sendDataToParent(formData);
    }

    const sendDataToParent = (data: any) => { props.passData(data) }

    return (
        <form onSubmit={handleSubmit}>
            {props.children}
        </form>
    )
}