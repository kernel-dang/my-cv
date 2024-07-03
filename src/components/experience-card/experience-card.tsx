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
                  <span>Description:&nbsp;</span>
                  <span>{description}</span>
                </div>
                {teamSize && (
                  <div>
                    <span>Team Size:&nbsp;</span>
                    <span>{teamSize}</span>
                  </div>
                )}
                {role && (
                  <div>
                    <span>Role:&nbsp;</span>
                    <span>{role}</span>
                  </div>
                )}
                {technology && (
                  <div>
                    <span>Technology:&nbsp;</span>
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
