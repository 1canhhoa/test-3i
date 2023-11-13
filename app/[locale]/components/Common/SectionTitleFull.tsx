const SectionTitleFull = ({
  title,
  paragraph,
  center,
  mb = "50px",
  textHeading = "text-black dark:text-white",
  textParams = "text-black dark:text-white"
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  textHeading?: string;
  textParams?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
      >
        <h2 className={`mb-4 text-6xl font-bold mt-8 text-green !leading-tight ${textHeading}`}>
          {title}
        </h2>
        <p className={`text-3xl !leading-relaxed text-body-color ${textParams}`}>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitleFull;
