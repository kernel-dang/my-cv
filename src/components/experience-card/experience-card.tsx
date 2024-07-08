import { map } from 'lodash';
import { Experience } from '../../model/experience';
import { Card } from '../card/card';
interface ExperienceCardProps {
  Experience: Experience;
}
export const ExperienceCard = ({
  Experience: { companyName, period, projects },
}: ExperienceCardProps) => {
  return (
    <Card>
      <div className="font-medium">
        <span>{period}</span>
        <span>:&nbsp;</span>
        <span>{companyName}</span>
      </div>
      <div className="flex flex-col gap-2">
        {map(projects, ({ name, description, role, teamSize, technology }) => {
          return (
            <>
              <div>
                <div className="font-medium">
                  <span>Project:&nbsp;</span>
                  <span>{name}</span>
                </div>
                <div>
                  <span className="font-medium">Description:&nbsp;</span>
                  <span>{description}</span>
                </div>
                {teamSize && (
                  <div>
                    <span className="font-medium">Team Size:&nbsp;</span>
                    <span>{teamSize}</span>
                  </div>
                )}
                {role && (
                  <div>
                    <span className="font-medium">
                      Role/Responsibilities:&nbsp;
                    </span>
                    <span>{role}</span>
                  </div>
                )}
                {technology && (
                  <div>
                    <span className="font-medium">Technology:&nbsp;</span>
                    <span>{technology}</span>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
    </Card>
  );
};
