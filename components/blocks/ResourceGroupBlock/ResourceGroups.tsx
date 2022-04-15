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
    <div className="flex flex-wrap">
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
