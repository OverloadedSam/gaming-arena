import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface ExpandableTextProps {
  children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= 300) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + '...';

  return (
    <Text>
      {summary}
      <Button
        size='xs'
        ml={1}
        fontWeight='bold'
        colorScheme='yellow'
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show less' : 'Read more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
