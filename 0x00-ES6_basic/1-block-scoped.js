export default function taskBlock(trueOrFalse) {
  const task = false; // Use const to declare task
  const task2 = true; // Use const to declare task2

  if (trueOrFalse) {
    const task = true; // Block-scoped task
    const task2 = false; // Block-scoped task2
  }

  return [task, task2];
}

