https://stackoverflow.com/questions/145131/whats-the-best-strategy-for-unit-testing-database-driven-applications

I work with a lot of web applications that are driven by databases of varying complexity on the backend. Typically, there's an ORM layer separate from the business and presentation logic. This makes unit-testing the business logic fairly straightforward; things can be implemented in discrete modules and any data needed for the test can be faked through object mocking.

But testing the ORM and database itself has always been fraught with problems and compromises.

Over the years, I have tried a few strategies, none of which completely satisfied me.

Load a test database with known data. Run tests against the ORM and confirm that the right data comes back. The disadvantage here is that your test DB has to keep up with any schema changes in the application database, and might get out of sync. It also relies on artificial data, and may not expose bugs that occur due to stupid user input. Finally, if the test database is small, it won't reveal inefficiencies like a missing index. (OK, that last one isn't really what unit testing should be used for, but it doesn't hurt.)

Load a copy of the production database and test against that. The problem here is that you may have no idea what's in the production DB at any given time; your tests may need to be rewritten if data changes over time.

Some people have pointed out that both of these strategies rely on specific data, and a unit test should test only functionality. To that end, I've seen suggested:

Use a mock database server, and check only that the ORM is sending the correct queries in response to a given method call.
What strategies have you used for testing database-driven applications, if any? What has worked the best for you?

---------------------

I've actually used your first approach with quite some success, but in a slightly different ways that I think would solve some of your problems:

Keep the entire schema and scripts for creating it in source control so that anyone can create the current database schema after a check out. In addition, keep sample data in data files that get loaded by part of the build process. As you discover data that causes errors, add it to your sample data to check that errors don't re-emerge.

Use a continuous integration server to build the database schema, load the sample data, and run tests. This is how we keep our test database in sync (rebuilding it at every test run). Though this requires that the CI server have access and ownership of its own dedicated database instance, I say that having our db schema built 3 times a day has dramatically helped find errors that probably would not have been found till just before delivery (if not later). I can't say that I rebuild the schema before every commit. Does anybody? With this approach you won't have to (well maybe we should, but its not a big deal if someone forgets).

For my group, user input is done at the application level (not db) so this is tested via standard unit tests.

Loading Production Database Copy:
This was the approach that was used at my last job. It was a huge pain cause of a couple of issues:

The copy would get out of date from the production version
Changes would be made to the copy's schema and wouldn't get propagated to the production systems. At this point we'd have diverging schemas. Not fun.
Mocking Database Server:
We also do this at my current job. After every commit we execute unit tests against the application code that have mock db accessors injected. Then three times a day we execute the full db build described above. I definitely recommend both approaches.
