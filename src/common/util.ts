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