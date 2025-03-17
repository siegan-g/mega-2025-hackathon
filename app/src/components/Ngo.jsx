import ExpandableCard from "./ExpandableCard";
import Card from "../models/card";
import { Header } from "./Header";

const cards = [
  new Card(
    "African Monitor",
    "Works on citizen-led development accountability to promote the SDGs across Africa",
    "https://www.africanmonitor.org/wp-content/uploads/2017/04/Group-21.jpg?id=199",
    "Visit",
    "https://www.africanmonitor.org/",
    "African Monitor is a Pan African organization established in 2006 that monitors development commitments and their impact on grassroots communities. The organization empowers citizens by providing platforms and opportunities for participation in decision-making processes. African Monitor envisions an African continent that achieves its development potential where people live with dignity, basic needs are met, human rights are upheld, and good governance is established."
  ),
  new Card(
    "Sustainable Energy Africa",
    "Focuses on sustainable energy solutions and climate action",
    "https://sustainable.org.za/wp-content/uploads/2023/08/1.jpg",
    "Visit",
    "https://sustainable.org.za/",
    "Sustainable Energy Africa promotes low-carbon energy development across urban Africa through research and policy engagement, focusing primarily on building capacity in local governments where implementation happens. The organization leverages South Africa's abundant renewable resources to advance sustainable energy solutions that address both environmental and social challenges. SEA's work targets the intersection of energy efficiency, poverty reduction, and climate action to create more sustainable communities."
  ),
  new Card(
    "SECTION27",
    "Advocates for health and education rights, aligning with SDGs on health, education and inequality",
    "https://section27.org.za/wp-content/uploads/2023/07/section27-stories.jpg",
    "Visit",
    "https://section27.org.za",
    "SECTION27 is a South African human rights organization that works to achieve equality and social justice through legal action, advocacy, and community mobilization. The organization primarily focuses on advancing healthcare access and education rights as guaranteed in the Constitution. By pursuing systemic change and accountability, SECTION27 aims to ensure dignity and equality for all South Africans."
  ),
  new Card(
    "Project 90 by 2030",
    "Works on climate change and renewable energy initiatives",
    "https://90by2030.org.za/wp-content/uploads/2023/04/Untitled-design-4.png",
    "Visit",
    "https://90by2030.org.za",
    "Project 90 by 2030 is a South African organization working toward climate justice and a low-carbon future through a Just Energy Transition approach. The organization focuses on developing environmental leadership among youth and empowering communities to engage with government on addressing climate change, energy poverty, and related social injustices. Their goal is to create transformative change in how South Africans interact with government and stakeholders on these critical issues, aiming to achieve a sustainable, equitable future by 2030."
  ),
  new Card(
    "Food & Trees for Africa",
    "Addresses environmental sustainability, food security and urban greening",
    "https://trees.org.za/wp-content/uploads/2025/02/TFH-2011-Smiling-children-with-trees-and-seedlings.jpg",
    "Visit",
    "https://trees.org.za/",
    "Food & Trees for Africa is a pioneering South African nonprofit focused on food security, environmental sustainability, and urban greening since 1990. The organization operates with business-like efficiency while maintaining nonprofit values, developing innovative approaches to social development challenges. FTFA's three decades of experience have established it as a leader in creating sustainable solutions that meaningfully improve South African communities and landscapes."
  ),
];

const Ngo = ({}) => (
  <section id="ngos" className=" pt-30 md:pt-30 px-12">
    <div className="relative max-w-7xl mx-auto">
      <Header
        heading="Discover the Organisations Making a Difference"
        subtitle={
          "Explore these innovative NGOs driving sustainable development and join the movement toward a greener, more equitable future for all."
        }
      />
      <div className="pt-12">
        <ExpandableCard cards={cards} />
      </div>
    </div>
  </section>
);

export default Ngo;
