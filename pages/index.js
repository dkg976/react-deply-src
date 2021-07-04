import Layout from "..//components/layout/Layout";
import MeetupList from "..//components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://static.meraevents.com/content/eventbanner/171564/mainbanner-min1533087590OlBdB.png",
    address: "Some address 5",
    address: "This is first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://static.meraevents.com/content/eventbanner/171564/mainbanner-min1533087590OlBdB.png",
    address: "Some address 6",
    address: "This is second meetup",
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}

export default HomePage;
