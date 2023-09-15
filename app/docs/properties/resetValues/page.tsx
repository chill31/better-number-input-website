import Code from "@/components/ui/code";
import DocTitle from "@/components/titles/DocTitle";
import P from "@/components/ui/Paragraph";
import HlCode from "@/components/ui/HlCode";

import Container from "@/components/page/Container";

export default function resetValues() {
  return (
    <Container>
      <DocTitle className="max-md:text-[2.7rem] !pb-5"><Code>resetValues</Code></DocTitle>
      <P>This property is a <Code>boolean</Code>. setting it to <Code>true</Code> refreshes all values of the number inputs on refresh.<br />setting it to <Code>false</Code> mantains browser (form) behaviour</P>
    
      <HlCode className="mt-4" lang="js" multiline>{`input.betterInputOptions.resetValues = false;
// mantains browser behaviour towards number inputs and does not delete the values on refresh.`}</HlCode>
    </Container>
  );
}
