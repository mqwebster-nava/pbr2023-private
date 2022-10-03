import POST_EVENT_SPEAKER from "./POST_EVENT_SPEAKER";

const EVENT_INFO =`
    location
    eventTime
    eventEndTime
    registrationLink
    recordingLink
    eventSpeakersCollection {
        items {
            __typename
            ${POST_EVENT_SPEAKER}
        }
    }
`;

export default EVENT_INFO;

