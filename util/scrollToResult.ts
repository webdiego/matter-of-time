export default function scrollToResult() {
  if (typeof window !== 'undefined') {
    const element = document.getElementById('result');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
