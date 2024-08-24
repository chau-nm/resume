/**
 * Scroll view to tag element by id
 * 
 * @param viewId
 */
export const scrollInView = (viewId: string) => {
  const view = document.getElementById(viewId);
  view?.scrollIntoView({ behavior: "smooth" })
}