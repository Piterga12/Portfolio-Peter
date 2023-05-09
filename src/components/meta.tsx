import NextHead from "next/head";

type MetaProps = {
  title: string;
  description: string;
};

const Meta = ({ title, description }: MetaProps) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-site-verification"
        content="2jnM1AoXQEkKAfi-2hjdsjt14rkuRzDrkBMPwGtSPu8"
      />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Meta;
