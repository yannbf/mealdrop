import styled, { useTheme } from 'styled-components'

const StyledSVG = styled.svg`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
`

export const Spinner = () => {
  const { color } = useTheme()
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <text transform="translate(-50 0)" fill={color.primaryText}>
        Looking for some food...
      </text>
      <animate attributeName="opacity" dur="1s" keyTimes="0;0.4;1" values="0;0;1" />
      <g>
        <circle cx="60" cy="50" r="4" fill="#22aca7">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.0204081632653061s"
            values="95;35"
            keyTimes="0;1"
            begin="-0.6566000000000001s"
          />
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="1.0204081632653061s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="-0.6566000000000001s"
          />
        </circle>
        <circle cx="60" cy="50" r="4" fill="#22aca7">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.0204081632653061s"
            values="95;35"
            keyTimes="0;1"
            begin="-0.3234s"
          />
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="1.0204081632653061s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="-0.3234s"
          />
        </circle>
        <circle cx="60" cy="50" r="4" fill="#22aca7">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.0204081632653061s"
            values="95;35"
            keyTimes="0;1"
            begin="0s"
          />
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="1.0204081632653061s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="0s"
          />
        </circle>
      </g>
      <g transform="translate(-15 0)">
        <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#61d8de" transform="rotate(90 50 50)" />
        <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#61d8de">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1.0204081632653061s"
            values="0 50 50;45 50 50;0 50 50"
            keyTimes="0;0.5;1"
          />
        </path>
        <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#61d8de">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1.0204081632653061s"
            values="0 50 50;-45 50 50;0 50 50"
            keyTimes="0;0.5;1"
          />
        </path>
      </g>
    </StyledSVG>
  )
}
