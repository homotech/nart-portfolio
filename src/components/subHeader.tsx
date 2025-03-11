const SubHeader = ({
  subheading,
  classes,
}: {
  subheading: string;
  classes: string;
}) => {
  return (
    <p
      className={`text-xs font-br-firma-semibold uppercase text-neutral-500 ${classes}`}
    >
      {subheading}
    </p>
  );
};

export default SubHeader;
