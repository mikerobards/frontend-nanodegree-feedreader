// Jasmine spec file

// jQuery init
$(function() {

  //  test suite of RSS feeds
  describe('RSS Feeds', () => {

    // test to ensure allFeeds array is defined and not empty
    it('are defined', () => {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // test that loops through every feed in allFeeds to
    // ensure each has a defined URL and the URL is not empty
    it('each feed has a defined URL', () => {
      allFeeds.forEach(feed => {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe('');
      });
    });

    // test that loops through each feed in allFeeds
    // and ensures the name is defined and that name is not empty
    it('each feed has a defined name', () => {
      allFeeds.forEach(feed => {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
      });
    });
  });

  // test suite The menu
  describe('The menu', () => {

    // test that ensures the menu element is hidden by default
    it('menu element is hidden by default', () => {
      expect($('.body').hasClass('menu-hidden')).toBe(true);
    });

    // test that ensures the menu appears when the menu icon is clicked,
    // and is hidden when clicked again
    it('menu displays/hides when icon clicked', () => {
      $('.menu-icon-link').click();
      if ($('.body').hasClass('menu-hidden')) {
        expect($('.body').hasClass('menu-hidden')).toBe(true);
      } else {
        expect($('.body').hasClass('menu-hidden')).toBe(false);
      }
    });
  });

  // test suit Initial Entries
  describe('Initial Entries', () => {

    //test that ensures when LoadFeed is called there is at least one .entry element
    // within the .feed container
    // async test
    beforeEach(done => {
      loadFeed(0, done);
    });

    it('there is at least one entry in the feed', (done) => {
      expect($('.feed').find('.entry').length).not.toBe(0);
      done();
    });
  });

  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', () => {
    // variables to distinguish entries
    let firstEntry,
      nextEntry;
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    beforeEach(done => {
      //clear feed
      $('.feed').empty();
      // first entry
      loadFeed(0, () => {
        firstEntry = $('.feed').find(allFeeds.url);
        done();
      });
      //next entry
      loadFeed(1, () => {
        nextEntry = $('.feed').find(allFeeds.url);
        done();
      });
    });

    it('new feed is different to old one', () => {
      expect(firstEntry).not.toBe(nextEntry);
    });
  });
}());