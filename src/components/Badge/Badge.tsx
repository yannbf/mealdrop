import styled, { css, useTheme } from 'styled-components';
import { Body } from '../typography';
import { Icon, IconName } from '../Icon';

const Container = styled.div<{ $squared?: boolean }>(
  ({ theme: { color, borderRadius }, $squared }) => css`
    padding: 3px 8px;
    background: ${color.badgeBackground};
    border-radius: ${$squared ? '0' : borderRadius.xs};
    display: inline-flex;
    align-items: center;
    text-transform: capitalize;
    span {
      color: ${color.badgeText};
    }
  `
);

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
`;

type BadgeProps = {
  text: string;
  icon?: IconName;
  className?: string;
  squared?: boolean;
  uppercase?: boolean;
};

export const Badge = ({ text, className, squared = false, icon, uppercase = false }: BadgeProps) => {
  const { color } = useTheme();

  let displayText = text;

  if (uppercase) {
    displayText = displayText.toUpperCase();
  }

  return (
    <Container className={className} $squared={squared}>
      {icon && (
        <IconWrapper>
          <Icon color={color.badgeText} size={16} name={icon} />
        </IconWrapper>
      )}
      <Body type="span" size="S">
        {displayText}
      </Body>
    </Container>
  );
};
