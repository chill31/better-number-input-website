import HlCode from "@/components/ui/HlCode";
import DocTitle from "@/components/titles/DocTitle";
import P from "@/components/ui/Paragraph";
import ButtonLink from "@/components/ui/ButtonLink";
import Code from "@/components/ui/code";

import Container from "@/components/page/Container";

export default function Installation() {
  return (
    <Container>
      <DocTitle>Installation</DocTitle>
      <P>
        To use <Code>better-number-input</Code> in your HTML5 website (no
        frameworks are supported), add the following script at the end of the
        body tag <span className="font-bold">BUT</span> before all scripts
      </P>

      <HlCode className="p-2" lang="xml">
        {`<script src="https://cdn.jsdelivr.net/gh/chill31/better-number-input/better-number-input.js"></script>`}
      </HlCode>

      <P className="mt-0">
        That&apos;s it. You&apos;ve successfully installed the library. Now just
        add number inputs to your HTML and they will be automatically enhanced.
      </P>

      <ButtonLink href="/docs" linkStyles="mt-12">
        Go to Documentation
      </ButtonLink>
    </Container>
  );
}
