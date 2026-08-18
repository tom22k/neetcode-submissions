/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        if (!intervals.length) {
            return true;
        }
        
        const sorted = intervals.sort((a, b) => a.start - b.start);

        let schedule = [sorted[0]];
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i].start < schedule[i - 1].end) {
                return false;
            }

            schedule.push(sorted[i]);
        }

        return true;
    }
}
