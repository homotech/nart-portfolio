const SubHeader = ({ subheading }: { subheading: string }) => {
  return (
    <p className="text-xs font-br-firma-semibold uppercase text-neutral-500">
      {subheading}
    </p>
  );
};

export default SubHeader;
