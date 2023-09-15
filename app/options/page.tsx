import DocTitle from "@/components/titles/DocTitle";
import Code from "@/components/ui/code";
import P from "@/components/ui/Paragraph";
import HlCode from "@/components/ui/HlCode";
import SubTitle from "@/components/titles/SubTitle";
import ThirdTitle from "@/components/titles/thirdTitle";

import Container from "@/components/page/Container";
import Link from "next/link";

export default function Options() {
  return (
    <Container>
      <DocTitle>Options</DocTitle>
      <P>
        To customize the options of <Code>better-number-input</Code>, you need
        to get your input.
      </P>

      <br />

      <HlCode lang="js">
        {`const input = document.querySelector(".my-number-input");`}
      </HlCode>

      <P>
        Now that you have your input, you need to know the default options
        first, so you can actually change them.
      </P>

      <pre>
        <HlCode lang="js" multiline={true}>
          {`const defaultOptions = {
  allowNegative: true,
  allowDecimal: true,
  allowScientificNotation: false,
  valueAsNumber: 0,
  resetValues: true
}`}
        </HlCode>
      </pre>

      <SubTitle className="mt-16">Customizing Defaults</SubTitle>
      <P>
        These options are located in the input&apos;s properties:{" "}
        <Code>{`input.betterInputOptions`}</Code>. Here&apos;s how you can
        change these values:
        <br />
      </P>

      <ThirdTitle className="mt-10">Changing one value</ThirdTitle>
      <P className="!mt-0">
        to change one value of the above options, you can do this:
      </P>
      <HlCode lang="js" multiline={true}>
        {`const input = document.querySelector(".my-number-input");
input.betterInputOptions.allowDecimal = false;`}
      </HlCode>

      <ThirdTitle className="mt-16">Changing multiple (all) values</ThirdTitle>
      <P className="!mt-0">
        to change the whole options object, you can do the following:
      </P>
      <HlCode lang="js" multiline={true}>
        {`const input = document.querySelector(".my-number-input");
const changedOptions = {
  allowNegative: false,
  allowDecimal: false,
  allowScientificNotation: true,
  valueAsNumber: 0, // refrain from changing this
  resetValues: true
};

input.betterInputOptions = changedOptions;
`}
      </HlCode>

      <P className="mt-16">Check out <Link href="/docs/properties" className="text-link">the properties page</Link> to know more in detail about the options and the input behaviour.</P>
    </Container>
  );
}
