export const utilService = {
    getTimeRange,
    capitalize,
    getWeekDays
}

function getTimeRange() {
    const times = []
    const from = new Date().getHours()
    const to = 23
    for (let i = from; i <= to; i++) {
        times.push(`${i}:00`)
    }
    times.push('00:00')
    return times
}

function capitalize(str) {
    return str[0] + str.slice(1)
}

function getWeekDays() {
    return ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
}

