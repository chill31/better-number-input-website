import Code from "@/components/ui/code";
import DocTitle from "@/components/titles/DocTitle";
import P from "@/components/ui/Paragraph";
import HlCode from "@/components/ui/HlCode";

import Container from "@/components/page/Container";

export default function allowScientificNotation() {
  return (
    <Container>
      <DocTitle className="font-mono !pb-5 overflow-hidden">allowScientificNotation</DocTitle>
      <P>This property is a <Code>boolean</Code>. setting it to <Code>true</Code> allows the user to enter numbers through scientific notation.<br />setting it to <Code>false</Code> disables scientific notation (e) at all.</P>
    
      <HlCode className="mt-4" lang="js" multiline>{`input.betterInputOptions.allowScientificNotation = false;
// disables the use of scientific notation.`}</HlCode>
    </Container>
  );
}
