export type CommandType = "forward" | "down" | "up";

export interface Position {
  distance: number;
  depth: number;
}

export interface Command {
  type: CommandType;
  value: number;
}

export interface AimedPosition extends Position {
  aim: number;
}

export function calculatePosition(commands: Command[]): Position {
  const position = {
    distance: 0,
    depth: 0,
  };

  for (const command of commands) {
    switch (command.type) {
      case "forward": position.distance += command.value;
                      break;
      case "down": position.depth += command.value;
                   break;
      case "up": position.depth -= command.value;
                 break;
    }
  }

  return position;
}

interface Action {
  (position: AimedPosition, value: number): AimedPosition
};

export function calculateAimedPosition(commands: Command[]): AimedPosition {
  const actions: Record<CommandType, Action> = {
    up: (position, value) => ({ ...position, aim: position.aim - value }),
    down: (position, value) => ({ ...position, aim: position.aim + value }),
    forward: (position, value) =>  ({ 
      distance: position.distance + value,
      depth: position.aim === 0 ? position.aim : position.depth + (value * position.aim), 
      aim: position.aim 
    })
  }

  const initialPosition: AimedPosition = {
    distance: 0,
    depth: 0,
    aim: 0
  };

  return commands.reduce((currentPosition, command) => actions[command.type](currentPosition, command.value), initialPosition);
}
