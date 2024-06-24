import {
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export const article = [
  {
    id: 1,
    title:
      "A Call to Action: Supporting Recovery and Resilience at Sawyer Camp Farmers CIG",
    date: "07 May, 2024",
    image: "https://ik.imagekit.io/thormars/Sawyer-Camp/fire-incident.jpg",
    content: (
      <Box color="#87A922" fontSize="md">
        <Text fontSize="lg" lineHeight={2}>
          In the quiet of the night on Sunday, April 28, 2024, a devastating
          fire swept through one of the foundational farms of the Sawyer Camp
          Farmers Common Initiative Group (SCFCIG) in Banga Bakundu, Cameroon.
          The incident resulted in the tragic loss of approximately 8,000 cones
          of oil palm and critically important machinery used for processing
          palm fruits into palm oil. The financial damage is estimated at around
          7 million francs CFA, marking a significant setback for the
          community-focused union that has tirelessly worked to empower local
          farmers and fortify the region's agricultural prowess.
        </Text>
        <br />
        <Text fontSize="lg" lineHeight={2}>
          The cause of the fire remains unknown, leaving the community in shock
          and rallying for answers and solutions to prevent future incidents.
          This event not only signifies a physical loss but also casts a shadow
          on the stability and future of our local farming economies, which are
          already grappling with challenges posed by climate change and
          biodiversity loss.
        </Text>
        <br />
        <Heading color="green" size="md">
          A Resilient Community in the Face of Adversity
        </Heading>
        <br />
        <Text fontSize="lg" lineHeight={2}>
          The Sawyer Camp Farmers CIG has always stood as a beacon of innovation
          and resilience. Founded with a mission to elevate the living standards
          of local farmers through sustainable practices and education, the
          group has transformed how local agriculture interacts with both the
          market and the environment. Through collaboration and resource access,
          this union has not only faced challenges but has also thrived,
          creating a sustainable model that others look up to.
        </Text>
        <br />
        <Text fontSize="lg" lineHeight={2}>
          In response to the recent catastrophe, the SCFCIG is initiating a
          comprehensive review of safety protocols and emergency response
          strategies to enhance resilience against unforeseen disasters. The
          goal is to rebuild better, with improved safeguards that ensure the
          safety of both the crops and the hardworking individuals dedicated to
          farming them.
        </Text>
        <br />
        <Heading color="green" size="md">
          How You Can Help
        </Heading>
        <br />
        <Text fontSize="lg" lineHeight={2}>
          In times of need, the strength of a community is reflected in the
          support it receives. Here’s how you can contribute to the recovery
          efforts:
        </Text>
        <br />
        <UnorderedList>
          <ListItem>
            <Text fontSize="lg" lineHeight={2}>
              <span style={{ fontWeight: "bold" }}>Donations: </span>
              Monetary donations are urgently needed to help replace the lost
              crops and machinery. Every contribution brings the SCFCIG one step
              closer to restoration and helps maintain the livelihoods of our
              farmers. Visit our{" "}
              <ChakraLink as={ReactRouterLink} color="blue" to="/donate">
                Donation Page
              </ChakraLink>{" "}
              to make a difference.
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="lg" lineHeight={2}>
              <span style={{ fontWeight: "bold" }}>Spread the Word: </span>
              Awareness is crucial. Share the story of SCFCIG’s resilience and
              needs with your network to help garner more support.
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="lg" lineHeight={2}>
              <span style={{ fontWeight: "bold" }}>Volunteering: </span>
              Lend a hand in the rebuilding efforts. Volunteer work includes
              helping clear debris, rebuilding structures, and supporting our
              farmers in their daily tasks as they recover from the loss. Visit
              our{" "}
              <ChakraLink as={ReactRouterLink} color="blue" to="/volunteer">
                Volunteer Page
              </ChakraLink>{" "}
              to lend a hand.
            </Text>
          </ListItem>
        </UnorderedList>
        <br />
        <Heading color="green" size="md">
          Looking Ahead
        </Heading>
        <br />
        <Text fontSize="lg" lineHeight={2}>
          As we face this challenge, our commitment to sustainable agriculture
          and community empowerment remains unwavering. The SCFCIG is determined
          to emerge from this tragedy stronger and more united than ever,
          continuing to supply the nation with high-quality produce. We are more
          than just a group of farmers; we are a family, a community bonded by
          our dedication to nurturing our land and our people sustainably.
        </Text>
        <br />
        <Text fontSize="lg" lineHeight={2}>
          The journey ahead is not easy, but with the continued support of our
          partners and the global community, the Sawyer Camp Farmers CIG will
          cultivate a future where economic growth and environmental stewardship
          go hand in hand. We invite you to join us in this crucial effort.
          Together, we can rebuild and reinvigorate the heart of Banga Bakundu.
        </Text>
        <br />
        <Heading color="green" size="md">
          Join Us in Our Efforts
        </Heading>
        <br />
        <Text fontSize="lg" lineHeight={2}>
          As we navigate through these challenging times, your involvement is
          crucial to our recovery and continued success. For any additional
          questions or direct support, please don’t hesitate to reach out
          through our{" "}
          <ChakraLink as={ReactRouterLink} color="blue" to="/contact-us">
            Contact Us
          </ChakraLink>{" "}
          page. Your involvement makes a vital difference to us and the entire
          Banga Bakundu community.
        </Text>
        <br />
      </Box>
    ),
  },
  {
    id: 2,
    title:
      "Grow Your Skills and Support Your Community: Summer Work Opportunities at Sawyer Camp Farms!",
    date: "14 April, 2024",
    image: "https://ik.imagekit.io/thormars/Sawyer-Camp/holiday-hire.jpg",
    content: (
      <Box color="#87A922" fontSize="md">
        <Text fontSize="lg" lineHeight={2}>
          Calling all Banga-Bakundu students! Summer break is almost here, and
          Sawyer Camp Farmers Common Initiative Group has exciting opportunities
          for you to make the most of your holidays!
        </Text>
        <br />
        <Text fontSize="lg" lineHeight={2}>
          We're looking for enthusiastic and hard-working students to join our
          team on our farms this summer. It's a fantastic chance to:
        </Text>
        <UnorderedList>
          <ListItem fontSize="lg" lineHeight={2}>
            <span style={{ fontWeight: "bold" }}>Earn an income: </span>
            Help your family financially or save money for school supplies and
            future goals.
          </ListItem>
          <ListItem fontSize="lg" lineHeight={2}>
            <span style={{ fontWeight: "bold" }}>
              Develop valuable skills:{" "}
            </span>
            Learn practical agricultural techniques, teamwork, and
            responsibility.
          </ListItem>
          <ListItem fontSize="lg" lineHeight={2}>
            <span style={{ fontWeight: "bold" }}>
              Gain real-world experience:{" "}
            </span>
            Get a head start on your career path in agriculture or discover if
            it's something you enjoy.
          </ListItem>
          <ListItem fontSize="lg" lineHeight={2}>
            <span style={{ fontWeight: "bold" }}>
              Contribute to your community:{" "}
            </span>
            Be part of ensuring a sustainable future for Banga-Bakundu by
            helping us cultivate high-quality crops.
          </ListItem>
        </UnorderedList>
        <br />
        <Heading color="green" size="md">
          Why Choose Sawyer Camp Farms?
        </Heading>
        <br />
        <Text fontSize="lg" lineHeight={2}>
          Sawyer Camp Farmers CIG is more than just a farm; we're a
          community-driven organization committed to empowering local farmers
          and promoting sustainable practices. Here's what sets us apart:
        </Text>
        <UnorderedList>
          <ListItem fontSize="lg" lineHeight={2}>
            <span style={{ fontWeight: "bold" }}>
              Safe and positive work environment:{" "}
            </span>
            We prioritize the well-being of our team members, providing a safe
            and supportive environment for learning and working.
          </ListItem>
          <ListItem fontSize="lg" lineHeight={2}>
            <span style={{ fontWeight: "bold" }}>
              Learn from experienced farmers:{" "}
            </span>
            Gain valuable knowledge and skills from our dedicated farmers who
            are passionate about agriculture.
          </ListItem>
          <ListItem fontSize="lg" lineHeight={2}>
            <span style={{ fontWeight: "bold" }}>
              Be part of something bigger:{" "}
            </span>
            Contribute to the success of our local economy and the production of
            healthy, sustainable food for our region.
          </ListItem>
        </UnorderedList>
        <br />
        <Heading color="green" size="md">
          What types of work will students be doing?
        </Heading>
        <br />
        <UnorderedList fontSize="lg">
          <ListItem>Planting and harvesting crops</ListItem>
          <ListItem>
            <Text fontSize="lg" lineHeight={2}>
              Weeding and maintaining fields
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="lg" lineHeight={2}>
              Irrigating and watering plants
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="lg" lineHeight={2}>
              Sorting and packaging produce
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="lg" lineHeight={2}>
              Assisting with farm maintenance
            </Text>
          </ListItem>
        </UnorderedList>
        <br />
        <Heading color="green" size="md">
          How to Apply
        </Heading>
        <br />
        <Text fontSize="lg" lineHeight={2}>
          We encourage all interested students (primary and secondary) to submit
          an application by contacting info@sawyer-camp.com. <br />
          Don't miss this opportunity to gain valuable experience, earn some
          income, and be part of something special this summer!
        </Text>
        <br />
        <Heading color="green" size="md">
          Benefits of Students Working on Farms During Holidays
        </Heading>
        <br />
        <UnorderedList>
          <ListItem fontSize="lg" lineHeight={2}>
            <span style={{ fontWeight: "bold" }}>
              Develops Work Ethic and Responsibility:{" "}
            </span>
            Farm work instills a strong work ethic and teaches valuable lessons
            about responsibility and commitment.
          </ListItem>
          <ListItem fontSize="lg" lineHeight={2}>
            <span style={{ fontWeight: "bold" }}>
              Connects Students with Nature:{" "}
            </span>
            Being outdoors and working with nature can be a refreshing change
            from the classroom and promote environmental awareness.
          </ListItem>
          <ListItem fontSize="lg" lineHeight={2}>
            <span style={{ fontWeight: "bold" }}>Learn Practical Skills: </span>
            Students gain valuable hands-on skills in agriculture, which can be
            beneficial for future careers or hobbies.
          </ListItem>
          <ListItem fontSize="lg" lineHeight={2}>
            <span style={{ fontWeight: "bold" }}>Boosts Self-Confidence: </span>
            Successfully completing tasks and contributing to the farm's success
            can give students a sense of accomplishment and boost their
            self-confidence.
          </ListItem>
        </UnorderedList>
        <br />
        <Text fontSize="lg" lineHeight={2}>
          We at Sawyer Camp Farms believe in empowering the youth of
          Banga-Bakundu. So, join us this summer and grow with us!
        </Text>
        <br />
      </Box>
    ),
  },
];
