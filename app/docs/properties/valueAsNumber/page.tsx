import Code from "@/components/ui/code";
import DocTitle from "@/components/titles/DocTitle";
import P from "@/components/ui/Paragraph";
import HlCode from "@/components/ui/HlCode";
import Container from "@/components/page/Container";

export default function valueAsNumber() {
  return (
    <Container>
      <DocTitle className="max-md:text-[2.7rem] !pb-5"><Code>valueAsNumber</Code></DocTitle>
      <P>This property is a <Code>number</Code>. It is supposed to be readonly like the <Code>valueAsNumber</Code> of any actual number input. As the library changes the type to text, the valueAsNumber is no longer valid use to get the value. To fix this, the same property has been added to the options of <Code>{`<input>.betterInputOptions`}</Code>.<br /><br />On each input, this property is validated and updated to match the same use case as the real property.</P>
    
      <HlCode className="mt-4" lang="js" multiline>{`const input = document.querySelector(".my-number-input");
input.addEventListener("input", (e) => {
  console.log(input.betterInputOptions.valueAsNumber);
});`}</HlCode>
    </Container>
  );
}
