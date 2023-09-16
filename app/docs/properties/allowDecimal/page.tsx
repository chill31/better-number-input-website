import P from "@/components/ui/Paragraph";
import HlCode from "@/components/ui/HlCode";
import Code from "@/components/ui/code";

import Container from "@/components/page/Container";
import DocTitle from "@/components/titles/DocTitle";

export default function allowDecimal() {
  return (
    <Container>
      <DocTitle className="max-md:text-[2.7rem] font-mono !pb-5">allowDecimal</DocTitle>
      <P>This property is a <Code>boolean</Code>. setting it to <Code>true</Code> allows entering decimal points in the inputs.<br />setting it to <Code>false</Code> disables entering the decimal point (.) at all.</P>
    
      <HlCode className="mt-4" lang="js" multiline>{`input.betterInputOptions.allowDecimal = false;
// disables entering decimal point.`}</HlCode>
    </Container>
  );
}
