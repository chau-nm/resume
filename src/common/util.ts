import { animateScroll as scroll } from "react-scroll";

/**
 * Scroll view to tag element by id
 * 
 * @param viewId
 */
export const scrollInView = (viewId: string) => {
  const view = document.getElementById(viewId);
  const viewTop = view?.getBoundingClientRect().top;
  scroll.scrollTo(viewTop ?? 0);
}

/**
 * Check element is in view or not
 * 
 * @param element HTML element
 * @returns 
 */
export const isInView = (element: HTMLElement | null): boolean => {
  if (element) {
    const rect = element.getBoundingClientRect();
    if (
      (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
      (rect.top <= 0 && rect.bottom >= window.innerHeight)
    ) {
      return true;
    }
  }
  return false;
}