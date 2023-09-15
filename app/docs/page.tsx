"use client";

import Code from "@/components/ui/code";
import DocTitle from "@/components/titles/DocTitle";
import P from "@/components/ui/Paragraph";

import Link from "next/link";
import SubTitle from "@/components/titles/SubTitle";

import Container from "@/components/page/Container";

export default function Docs() {
  return (
    <Container>
      <DocTitle className="max-md:text-[2.7rem]">Documentation</DocTitle>
      <p className="text-lg mt-5">
        If you haven&apos;t already, install the library by following the
        instructions in the <Link href="/installation">Installation</Link> page.
        When you have done that, you can read below the features and options to
        configure and use <Code>better-number-input</Code>
      </p>

      <SubTitle className="mt-12">Features</SubTitle>
      <P className="text-lg mt-4">
        <Code>better-number-input</Code> provides an advanced solution to loose
        number inputs. Only a few browsers actually implement number checking in
        their number inputs, while most browsers just give arrows to change
        numbers, without actually checking what the user is entering.
        <br /> For example, Firefox allows users to enters alphabets. Not really
        numbers, are they?
      </P>

      <SubTitle className="mt-12">Options</SubTitle>
      <P>
        This library comes with a lot of options, but they are not all necessary
        to implement. All the options are set by default but can be changed
        through just a few lines of code or even one. Available options are:
      </P>

      <br />

      <ul className="flex flex-col gap-7 mt-10">
        <li>
          <Code>allowNegative</Code>
        </li>
        <li>
          <Code>allowDecimal</Code>
        </li>
        <li>
          <Code>allowScientificNotation</Code>
        </li>
        <li>
          <Code>valueAsNumber</Code>
        </li>
        <li>
          <Code>resetValues</Code>
        </li>
      </ul>

      <p className="mt-7">
        To learn more about these options and how to customize these, go to{" "}
        <Link href="/options" className="text-link">
          the options page
        </Link>
      </p>
    </Container>
  );
}
