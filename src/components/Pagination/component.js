export default {
  name: 'Pagination',
  props: {
    setCurrentPage: Function
  },
  methods: {
    clickHandle (e) {
      document.querySelectorAll('.page-nr').forEach(nr => {
        nr.classList.remove('current')
      })
      e.target.classList.add('current')
      this.setCurrentPage(e.target.innerText)
    }
  }
}
