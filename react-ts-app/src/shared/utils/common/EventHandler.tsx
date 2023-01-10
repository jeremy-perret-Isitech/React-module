export const eventHandler = (event: any, data: any = false) => {
    const eventAsText = "Event : " + event.type
    data ? console.log(eventAsText, data) : console.log(eventAsText);
}