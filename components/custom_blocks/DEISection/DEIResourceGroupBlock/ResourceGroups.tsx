import {
  ResourceGroupBlock,
  ResourceGroupBlockInterface,
} from "./ResourceGroupBlock";

interface ResourceGroupsInterface {
  groups: Array<ResourceGroupBlockInterface>;
}

export const ResourceGroups: React.FC<ResourceGroupsInterface> = ({
  groups,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-md md:gap-x-2xl gap-y-2xl mt-lg ">
      {groups.map((group, index) => {
        return (
          <ResourceGroupBlock
            key={`${group.title}_${index}`}
            title={group.title}
            description={group.description}
          />
        );
      })}
    </div>
  );
};
