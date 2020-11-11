import * as moment from 'moment'

export const DEFAULT_TIMEZONE = 'Asia/Ho_Chi_Minh'

export class MomentHumanize {
  static relativeTime = {
    future: 'tới',
    past: 'trước',
    s: 'vài giây',
    ss: 'giây',
    m: 'một phút',
    mm: 'phút',
    h: 'một giờ',
    hh: 'giờ',
    d: 'một ngày',
    dd: 'ngày',
    M: 'một tháng',
    MM: 'tháng',
    y: 'một năm',
    yy: 'năm'
  }

  static from(from: moment.MomentInput, to: moment.MomentInput) {
    const duration = moment.duration(moment(from).diff(to))
    const years = duration.years()
    const months = duration.months()
    const days = duration.days()
    const hours = duration.hours()
    const minutes = duration.minutes()
    const seconds = duration.seconds()
    return [
      years && `${years} ${MomentHumanize.relativeTime.yy}`,
      months && `${months} ${MomentHumanize.relativeTime.MM}`,
      days && `${days} ${MomentHumanize.relativeTime.dd}`,
      hours && `${hours} ${MomentHumanize.relativeTime.hh}`,
      minutes && `${minutes} ${MomentHumanize.relativeTime.mm}`,
      seconds && `${seconds} ${MomentHumanize.relativeTime.ss}`
    ]
      .filter(h => h)
      .join(' ')
  }

  static fromNow(date: moment.MomentInput) {
    return MomentHumanize.from(date, moment())
  }
}
