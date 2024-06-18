import { VStack, Text, Heading } from "@chakra-ui/react";

const projects = [
  {
    id: 1,
    name: "The Cocoa Coffee Seedling Project (CCSP)",
    location: "Banga-Bakundu, Cameroon",
    image: "https://ik.imagekit.io/thormars/Sawyer-Camp/seedling.webp",
    article: (
      <VStack spacing={6}>
        <Text>
          The CCSP tackles two crucial challenges faced by rural communities:
          low crop yields and environmental degradation. Here's how it works:
          SCFCIG farmers, utilizing their expertise and modern farming
          techniques, nurture coffee seedlings in dedicated nurseries. These
          healthy, robust seedlings are then distributed to local small-scale
          farmers, significantly boosting their potential crop output.
        </Text>
        <Text>
          But the CCSP goes beyond mere seedling distribution. The project also
          prioritizes knowledge-sharing and sustainable practices. SCFCIG
          farmers act as mentors, educating their smaller-scale counterparts on
          best practices for coffee cultivation. This includes the utilization
          of organic materials and manure, promoting environmentally friendly
          methods that nurture the soil and protect biodiversity.
        </Text>
        <Text>
          The impact of the CCSP is multi-faceted. By equipping small-scale
          farmers with high-quality seedlings and valuable knowledge, the
          project empowers them to increase their income and improve their
          livelihoods. This, in turn, contributes to alleviating rural poverty
          and fostering a more economically vibrant community.
        </Text>
        <Text>
          Furthermore, the emphasis on organic practices ensures long-term
          environmental sustainability. By reducing reliance on chemical
          fertilizers, the CCSP promotes soil health and biodiversity, creating
          a thriving ecosystem that benefits both coffee production and the
          surrounding environment.
        </Text>
        <Text>
          The Cocoa Coffee Seedling Project serves as a remarkable example of
          collaboration, knowledge transfer, and environmental responsibility
          within the agricultural sector. By bridging the gap between
          experienced and emerging farmers, the CCSP empowers rural communities,
          fosters sustainable practices, and paves the way for a brighter future
          for generations to come.
        </Text>
      </VStack>
    ),
  },
  {
    id: 2,
    name: "Sustainable Palm Oil Production Expansion",
    location: "Sawyer Camp, Banga-Bakundu, Cameroon",
    image: "https://ik.imagekit.io/thormars/Sawyer-Camp/palm-oil-bottle.jpg",
    article: (
      <VStack spacing={6}>
        <Text>
          At Sawyer Camp Farmers Common Initiative Group (SCFCIG), we're
          constantly striving for a more sustainable future. That's why our
          Sustainable Palm Oil Production Expansion project is already well
          underway! This exciting initiative is seeing us expand our palm oil
          production capacity while staying true to our core values of
          sustainability and community empowerment.
        </Text>
        <Heading w="100%" align="left" color="green" size="md">
          Why Sustainable Palm Oil?
        </Heading>
        <Text>
          Palm oil is a valuable crop, but traditional production methods can
          have negative environmental and social impacts. We believe responsible
          palm oil production is not only achievable, but essential. That's why
          the heart of our expansion project revolves around these core
          principles.
        </Text>
        <Heading w="100%" align="left" color="green" size="md">
          Sustainability in Action:
        </Heading>
        <Text w="100%">
          Here's how SCFCIG is ensuring our palm oil expansion is truly
          sustainable:
        </Text>
        <ul>
          <li>
            <span style={{ fontWeight: "bold" }}>
              Zero-deforestation expansion:{" "}
            </span>
            We're actively planting new palm groves only on degraded land,
            protecting vital rainforests and their rich biodiversity.
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>
              High-yield, low-impact practices:{" "}
            </span>
            We've adopted innovative techniques like intercropping and precision
            agriculture. These methods maximize yields while minimizing our
            environmental footprint.
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Soil health focus: </span> Our
            farmers are implementing practices like composting and cover
            cropping. This maintains healthy soil, reduces reliance on chemical
            fertilizers, and promotes long-term productivity.
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Water conservation: </span>{" "}
            We're utilizing efficient irrigation systems and water management
            techniques to minimize water usage across our existing and expanding
            plantations.
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Waste reduction: </span> We're
            exploring ways to utilize palm waste products, such as empty fruit
            bunches, for biofuel or compost, minimizing waste and creating
            additional value.
          </li>
        </ul>
        <Heading w="100%" align="left" color="green" size="md">
          The Sustainable Future is Here:
        </Heading>
        <Text>
          The "Sustainable Palm Oil Production Expansion" project is a
          significant leap forward for SCFCIG. By expanding responsibly, we're
          contributing to a thriving palm oil industry that benefits both our
          environment and our community. We invite you to join us on this
          ongoing journey as we cultivate a sustainable future for Banga-Bakundu
          and beyond.
        </Text>
        <Heading w="100%" align="left" color="green" size="md">
          Stay Updated!
        </Heading>
        <Text>
          We'll continue to share regular updates on the project's progress here
          on our website. This includes details on our implemented practices,
          community involvement, and future goals.
        </Text>
        <Text w="100%">
          Together, let's celebrate a brighter, more sustainable future for palm
          oil!
        </Text>
      </VStack>
    ),
  },
];

export default projects;
