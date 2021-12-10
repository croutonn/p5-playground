import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import * as React from "react";

import { Canvas } from "@/components/base/Canvas";
import { getConfig } from "@/lib/utils/config";

import type { ParsedUrlQuery } from "querystring";

export interface WorkPageParams extends ParsedUrlQuery {
  slug: string;
  title: string;
}

export interface WorkPageProps extends WorkPageParams {}

const WorkPage: NextPage<WorkPageProps> = ({ slug, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Canvas slug={slug} />
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<WorkPageParams> = async (context) => {
  const {
    publicRuntimeConfig: { works },
  } = getConfig();

  return {
    paths: works.map((work) => ({ params: work })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<WorkPageProps, WorkPageParams> = async ({ params }) => {
  if (!params) throw new Error("Invalid params");

  const props: WorkPageProps = {
    ...params,
  };

  return {
    props,
  };
};

export default WorkPage;
