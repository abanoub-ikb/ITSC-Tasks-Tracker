
export function calculateTaskRemainingTime(startDate, deadlineDate) {
    const startTime = new Date(startDate).getTime();
    const deadlineTime = new Date(deadlineDate).getTime();
    const currentTime = Date.now();
    const totalTime = deadlineTime - startTime;
    const elapsedTime = currentTime - startTime;
    const remainingPercentage = ((totalTime - elapsedTime) / totalTime) * 100;

    let status;
    if (remainingPercentage <= 0) {
        status = "Overdue";
    } else if (remainingPercentage <= 25) {
        status = "Urgent";
    } else if (remainingPercentage <= 50) {
        status = "Moderate";
    } else {
        status = "On Track";
    }

    return status;
};

export function calculateTaskProgress(taskTotalHours,actualWokrdHours){
    let progress =  ((Number(actualWokrdHours)/Number(taskTotalHours)) * 100).toFixed();
    return isNaN(progress) ? 0 : progress
};

export function sortTasksBasedOnStartTime(tasks = []){
    tasks.sort((a, b) => {
        const dateA = new Date(a.start);
        const dateB = new Date(b.start);
        
        return dateA - dateB;
      });
      return tasks
}

