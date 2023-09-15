import Code from "@/components/ui/code";
import DocTitle from "@/components/titles/DocTitle";
import P from "@/components/ui/Paragraph";
import HlCode from "@/components/ui/HlCode";

import Container from "@/components/page/Container";

export default function allowNegative() {
  return (
    <Container>
      <DocTitle className="max-md:text-[2.7rem] !pb-5"><Code>allowNegative</Code></DocTitle>
      <P>This property is a <Code>boolean</Code>. setting it to <Code>true</Code> allows entering negative numbers in the inputs.<br />setting it to <Code>false</Code> disables entering the minus sign (-) at all.</P>
    
      <HlCode className="mt-4" lang="js" multiline>{`input.betterInputOptions.allowNegative = false;
// disables entering negative numbers.`}</HlCode>
    </Container>
  );
}
