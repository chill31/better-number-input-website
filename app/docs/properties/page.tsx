import Code from "@/components/ui/code";
import DocTitle from "@/components/titles/DocTitle";
import P from "@/components/ui/Paragraph";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/page/Container";

export default function Properties() {
  return (
    <Container>
      <DocTitle className="max-md:text-[2.7rem]">Properties</DocTitle>
      <P>Check out the properties of the new enhanced number input</P>

      <ul className="flex flex-col gap-7 mt-10">
        <li className="ml-8 flex gap-4 justify-start items-center">
          <Code>allowNegative</Code>
          <ButtonLink href="/docs/properties/allowNegative" linkStyles="text-link" buttonStyles="bg-transparent p-2 hover:bg-transparent">
            <BsBoxArrowUpRight className='text-lg' />
          </ButtonLink>
        </li>
        <li className="ml-8 flex gap-4 justify-start items-center">
          <Code>allowDecimal</Code>
          <ButtonLink href="/docs/properties/allowDecimal" linkStyles="text-link" buttonStyles="bg-transparent p-2 hover:bg-transparent">
            <BsBoxArrowUpRight className='text-lg' />
          </ButtonLink>
        </li>
        <li className="ml-8 flex gap-4 justify-start items-center">
          <Code>allowScientificNotation</Code>
          <ButtonLink href="/docs/properties/allowScientificNotation" linkStyles="text-link" buttonStyles="bg-transparent p-2 hover:bg-transparent">
            <BsBoxArrowUpRight className='text-lg' />
          </ButtonLink>
        </li>
        <li className="ml-8 flex gap-4 justify-start items-center">
          <Code>valueAsNumber</Code>
          <ButtonLink href="/docs/properties/valueAsNumber" linkStyles="text-link" buttonStyles="bg-transparent p-2 hover:bg-transparent">
            <BsBoxArrowUpRight className='text-lg' />
          </ButtonLink>
        </li>
        <li className="ml-8 flex gap-4 justify-start items-center">
          <Code>resetValues</Code>
          <ButtonLink href="/docs/properties/resetValues" linkStyles="text-link" buttonStyles="bg-transparent p-2 hover:bg-transparent">
            <BsBoxArrowUpRight className='text-lg' />
          </ButtonLink>
        </li>
      </ul>
    </Container>
  );
}
