import React from 'react';
import { Box, Flex, Heading, Text, Icon, Link } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center" p={5}>
      <Text fontSize="lg" textAlign="center" mb={6}>
        Welcome to our quiz application! This is a platform where you can
        challenge your knowledge and improve your skills across various topics.
        We offer quizzes in a wide range of categories to test your expertise.
      </Text>

      {/* Testimonial Section */}
      <Box border="1px" borderColor="gray.200" p={5} borderRadius="md" boxShadow="sm" mb={6}>
        <Heading as="h3" size="md" mb={3}>
          What Our Users Say
        </Heading>
        <Text fontStyle="italic">
          "This quiz app has helped me learn new things while having fun. The
          questions are diverse and challenging!"
        </Text>
      </Box>

      {/* Contact Section */}
      <Box textAlign="center" mb={6}>
        <Heading as="h3" size="md" mb={3}>
          Get in Touch
        </Heading>
        <Text mb={2}>Have questions? Feel free to reach out to us!</Text>
        <Link href="mailto:support@quizapp.com" color="teal.500" fontSize="lg">
          support@quizapp.com
        </Link>
      </Box>

      {/* Icon Section */}
      <Box textAlign="center" mb={6}>
        <Icon as={FaArrowRight} w={6} h={6} color="teal.500" aria-label="Go to next section" />
      </Box>

      {/* Add a CTA Button */}
      <Link href="/quiz" color="teal.500" fontSize="lg" fontWeight="bold">
        Start Quiz
      </Link>
    </Flex>
  );
}
