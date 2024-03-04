function timeWord(time) {
    const hours = parseInt(time.substring(0, 2));
    const minutes = parseInt(time.substring(3));
  
    const numToWords = [
      'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three',
    ];
  
    const tensToWords = ['o\'clock', 'ten', 'twenty', 'thirty', 'forty', 'fifty'];
  
    const getHourWord = (hour) => {
      if (hour === 0) return 'midnight';
      if (hour === 12) return 'noon';
      const period = hour < 12 ? 'am' : 'pm';
      hour = hour % 12 || 12;
      return `${numToWords[hour]} ${period}`;
    };
  
    const getMinuteWord = (minute) => {
      if (minute === 0) return '';
      if (minute < 20) return numToWords[minute];
      const minuteString = minute.toString();
      return `${tensToWords[parseInt(minuteString[0])]} ${numToWords[parseInt(minuteString[1])]}`;
    };
  
    const hourWord = getHourWord(hours);
    const minuteWord = getMinuteWord(minutes);
  
    if (hours >= 12) {
      return `${hourWord} ${minuteWord} pm`;
    } else {
      return `${hourWord} ${minuteWord} am`;
    }
  }
  
  module.exports = timeWord;