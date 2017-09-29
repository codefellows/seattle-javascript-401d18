![cf](http://i.imgur.com/7v5ASc8.png) lab 25 - Tree Data Structure
====

## Daily Plan
* Notes:
  - Anything top of mind

* Code Review _Brief review of the Expense Tracker_
* CSS Demo _Build a checkbox slider and radio selection bar in vanilla CSS_

* Review Tree Data Structure (Scott's implementation)
  * TreeNode & Methods: breadthFirst, depth-first methods, add, prune

* Whiteboarding challenges
  * Groups of 2 (interviewer / interviewee): 30 minute hard cap for each person, for each challenge
    * **Use the Whiteboarding rubric to grade each other**
  
  * Questions:
    * Implement remove method that accepts a val to identify a node
      * remove that node from the tree, while reassigning it's children, if any, to the parent node
    * Implement a method that returns the parent node with the most number of children in the tree
      * return value should look like:
      ```javascript
        {
          highCount: 1,
          highNode: Node { val: 1, children: [ [Object] ] }
        }
      ```

    **Stretch**
    * Implement a method to count the number of nodes in the tree
    * Implement a method to count the number of edges in the tree

* Lab Review _HTML Parser Challenge!_
