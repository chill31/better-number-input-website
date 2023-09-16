import HlCode from "@/components/ui/HlCode";
import DocTitle from "@/components/titles/DocTitle";
import P from "@/components/ui/Paragraph";
import ButtonLink from "@/components/ui/ButtonLink";
import Code from "@/components/ui/code";
import SubTitle from "@/components/titles/SubTitle";

import Container from "@/components/page/Container";

export default function Extra() {
  return (
    <Container>
      <DocTitle>Extra Things</DocTitle>
      <P>
        If you have read the documentation, please read the given things to completely understand the library.
      </P>

      <SubTitle className="mt-16">Disabling Features</SubTitle>
      <P>
        There might be a few <Code>{`<input type="number">`}</Code> elements which you would not want to implement strict checking for, so the library gives you an option to disable the checking for the inputs. Check out this code: 
      </P>

      <HlCode lang="xml" multiline={false}>{`<input type="number" disable-better-number-input>`}</HlCode>

      <SubTitle className="mt-16">Input Checking</SubTitle>
      <P>
        The library changes all <Code>{`<input type="number">`}</Code> (except those which have been disabled) to <Code>{`<input type="text">`}</Code> because it allows for faster and efficient checking. It also removes those up and down arrows at the end of the input. If you have put the library script <b>BEFORE</b> all your other scripts, make sure to not select any of the {'"number"'} inputs through their attributes or type as the library changes it to text.<br />For example, previously, you would be selecting number inputs like this:
      </P>

      <HlCode className="mt-4 mb-4" lang="js" multiline={false}>{`document.querySelector('input[type="number"]')`}</HlCode>

      <P>This is invalid use, as these inputs are no longer number types, instead, add a class or any identifier you would prefer instead of <Code>{"type='number'"}</Code> to them and <b>THEN</b> select them.</P>

      <HlCode className="mt-4" lang="xml" multiline={true}>
        {`<input type="number" class="my-number-input">
<!-- the type="number" will get changed to "text" -->`}
      </HlCode>
      <HlCode className="mb-4" lang="js" multiline={false}>{`document.querySelector('input.my-number-input')`}</HlCode>

      <SubTitle className="mt-16">Getting Values</SubTitle>
      <P>As you read above, the number inputs are changed to text inputs. This means the <Code>valueAsNumber</Code> property does not exist anymore on the input. To get the number values of the input, check out the following code snippet:</P>

      <HlCode className="mt-4" lang="js" multiline={true}>
{`const input = document.querySelector('.my-number-input');
input.addEventListener('input', () => {
  const value = input.betterInputOptions.valueAsNumber;
  console.log(value);
});`}
      </HlCode>

      <P className="mb-4">This <Code>valueAsNumber</Code> property also checks for <Code>NaN</Code> values, like when the user has only entered a decimal (.) or negative (-) sign. Whenever an input is <Code>NaN</Code>, this property will return <Code>0</Code></P>

      <ButtonLink href="/docs" linkStyles="mt-12">
        Back to Documentation
      </ButtonLink>
    </Container>
  );
}
