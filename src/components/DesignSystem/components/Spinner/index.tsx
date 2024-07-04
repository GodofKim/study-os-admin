import styles from "./index.module.css";

const colors = {
  light:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOvSURBVHgBzZjPaxNBHMXfJlFLxdrW3/gLwR8IrQdBUCzUgwoqetWTaPXiTVAvHjwIgqB/gp69CYpCFcSLIB7VqpWC2lpLFbW1P2xrNxvfNzuTnZ1smrRNd/Pg8d1sktnPvpmd3R1gjsrlcm30Bfoe/Z4epKfpX/Q1JCEeuIG+TPfQP+kheoQepycVYFbVzaiCMpX8SMBYztHn6SY6rb+KsKPqJroX81RZQMIdYrlFN0aA2XKM7/+gCsqUgbvKckaByUE9BaFTMkFN4F7Hcd5goQAJtozlBn3QgIKq8jllVEmqn35Hj9J99ANUSaUSvE4fUBCmHAPyCX2H7mJaVelOVALI9C6xtCMMp6GkvqKvEKofMShjwR1jOaVgchagdN9Ngt1HjMoYcOvgTyVZBZTSX9ED9EXCdSNmmQmepVfDB0wZ+yW5DsINIAHlAZneWpbDCODMKeR2UnAFQOo0wnC6PibcIyQoDdiK4KrVk7BA3kXCyrB7d7GuQvjKFbhOpjeIhCUJtsDvXpF5G+tEDUgAtyDcvSKP6b1GDUgAV9AugvREXagRaUA9OUPVxMeelgDWIQwoGkWNSAC9iP0eEhBnFD3MCs+bAihp1evfqLoEMUvBLTJ3wQBcYu6kNyB+CVza+JwPSybkL/DHoLZ0bxPPqB7xSgAzCjKlqiMbHxSUBpQpZzFiTJFhpNUx05bzpF8RTlC7HfHJTE9b2LIp3jE+cmMMxd3cwjNrRjxqQLhrtV39YPoMxd0sPo4FFkNYjqB7zRSzDM/TgM8RJOcZ2zvZwG4skNi2ADUjnJ6uf6E+gKQTBqSGc1U9op64qw0n424jised1Gky/SsAKj2lxxFOUKrEf5INNqJKYlvSpjxF1aF43ImH9G8LgCrFhwinqLdlEHew4VbMU2rVYqsFlzI8TBa3wBXRwFGWvQjGo2fBvqVfspERzA5Mxtt6BG+OZk9pT7DdPvN/TonG5OV9B4q729yWtZjucm98bEuW61YqOxHtaLgp+ItO05UASvwn6G0RjbnGZ1fVb/Qk/Pu6fCfdJvf3egsq6mQ99d9PNlxJQAO0jWV/BGTWArS37X1uiTakysLTZ8JloxhmXB/kn14Qcpib++ilCNYItQvnEnGy9tqO/c4t/+/nMb5jJgZUILUELBfOdhRfNHb3uSX2manJNNJDuKlyx64I0ACVKWIPvQZ+olFgngUlVRITGLmgfsxmPXFWgBasrIY1KVi5GOTCyt9DFYwMfBkeYwrqN+ag/7Qt2vjqXJSyAAAAAElFTkSuQmCC",
  dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXJSURBVHgBzVhLT2RFFD51b9PNGxoQHJQ3E+ThSCRGTYyyUDdGdySujDpGtybGjSsyiYmJbtzrLyAxMboYE4xx6QITzRAGkMcMDTgQns2rm9vdfl/dczs9DmFgpunmJMWpulTf+u53XlVl5BGls7PzFahn0V41xjyXyWTqoOuhd/Hs2/n5+RuSBzHnmdzd3V2dSqU+BpBPACQK7eJxtnGM5w50OhwOd09NTd2Rx5TQWSYRWDqdvo7FP8LiUYJxHEcwzqCfbTo21EdHR63oXzzAjo6ONwDua3RrxWdKckAJAIuPy/aN9vlnR/IgpwIEc18A3PtqOkpaQZiAvUyAiA+NCYDegQ/+LRcFsKenp8rzvC+x5usYphVQwFAazxw+x5B6B89iMPkkdBzjuyUlJT9KnuREgMfHxzew+LCCEAVHbQDEKOhfoL+DvgW28mLOMwGEz30GMK/BtOnAZOJHe2DePwDy87m5uZgUQO4DiNz2FtS7CiaT8y8CpPm+Als/SAElC7C3t/dKIpG4jm6KphTfz6zzg7EV13U/nZmZuS0FlixA+N0HUI1gLkVwsLAw12EcTyaTHy4tLa1IEcQCbG9vfxJEvSk+e2SOrGUAkqnjm2KBo1gzwnzvAVhK8xwZZJRS/wSf+1mKKJZBgGHRT9OkoqWKOQ7qeymyhJBWrgHME2QvqAqagG8uLi7+K0WWEMAMQKd0bHzyLIk35RIIAXZo+aIQHP+k4Xt/ySWQEMDVQ3vGLxtB6bgll0QsQEauJmcKsRbd9wJB4DqlTCkEqUA98cvapRBHc19a82AKgG0elOKIGR0ddUZGRrgxZiYxDJI4gJXrBJtp0CJSeDH9/f0lY2NjdjA0NJSpqqrK0AfjAGkBaWnLoLI8LQUWgtvZ2QmOFLK/v0+A4tbW1vZg3IRGcDQtk7WLrdfvq6urx1IgYSxUV1e75eXlpqKiwkQiEWd5eVl4RJwSf/8XBIoHVsNbW1sFY5E+19jYGMZ2zz08PHQPDg5s4//IYAn0SxooZNA29Eu3t7f/lAIIwETgXmUAaCorKw1A2ooGEyedhYWFaYDb091LwCJBDvT19dVJAQQ+Xw2TurgUcLD3dEtLS22bnJz0HJ3zK0FpHrS5kKbGF70tFyzw9Roc8sPYMLsAGSJQ9vHMpjsLEKh/C/aDontBNXkvzsbPywXJ8PBwCKzV4ZrEsofjqovjrsMxAuWAc6wj7u7uejU1NRFEUgtBcjetJmdEtzU3N8+ur6/vSR4Fea5kZWWlJRQKEVR2H6Bn8OT09HQ8C5AC57wLX3gR4FzdGxIotYMXdOEDphE0R5IHQc4Lx+PxDjAW1rOPwdqGQGFig8PZmmg1ywIki3V1dawqz6h5yZ71AyZyvGAAEb+H9LMmjyG8tYCPdQBYmBsoBSUwsYBNutsWiDgI5ru5P8biq9FoNAJsT2kk2zpNEX8z2wmQVQ0NDeubm5sJOYfQ3/CuFryqjXc9EFYuC4pCDd9LzM7O3sv9nfv/FwHkbH19PSsLt2GZXKCqG6Cvge1KJNfExsbGqTuf1tbWKHy4BT58lenE/1b/Vox9gBJELMfHcLMYqtd9G5UTLzBxDC3FD95B92qQFyFBZHtYyI41HVEvg4Ej1nX6LYQfzuRb7mMxdpcUvCPFkMWYfc6HPgK4+YmJiQdKq3sSQPiAhzYJluiHLbolY99GeMBmEEho5Vi8Ui83o3hejX4ZwfGkCD+zZ2xljn0J7n34UYODg/Pj4+PeSVgeegXc1dXFQ9XLeFFFkMyVvZQC5tgDg5ZdZSnLbjDOtQIZxPwkxjFUsnunre8+DCCjFj75DyMZL2TpsxeXZJLsBaxqILFspfU+J6PaEkXGdB7n7GB8+yzXdue6RNeLzRewbpMymmXHY77QvrLlqY95IIxYE2VlZSson2vnuU88F8BcaWtru4JEG0VOawIjDAaebVy9OmEKYlLfhin3sFtZi8Vim/II8h891be2sDfWHwAAAABJRU5ErkJggg==",
  orange:
    "data:image/png;base64,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",
  purple:
    "data:image/png;base64,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",
};

export interface SpinnerProps {
  size?: number;
  color?: "light" | "dark" | "orange" | "purple";
}

export const Spinner = ({ size = 24, color = "light" }: SpinnerProps) => {
  return (
    <div className={styles.wrapper}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width={size} height={size} fill={`url(#pattern_${color})`} />
        <defs>
          <pattern
            id={`pattern_${color}`}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref={`#${color}`} transform="scale(0.00641026)" />
          </pattern>
          {color === "dark" && (
            <image
              id={color}
              width="156"
              height="156"
              xlinkHref={colors.dark}
            />
          )}

          {color === "light" && (
            <image
              id={color}
              width="156"
              height="156"
              xlinkHref={colors.light}
            />
          )}

          {color === "orange" && (
            <image
              id={color}
              width="156"
              height="156"
              xlinkHref={colors.orange}
            />
          )}

          {color === "purple" && (
            <image
              id={color}
              width="156"
              height="156"
              xlinkHref={colors.purple}
            />
          )}
        </defs>
      </svg>
    </div>
  );
};
