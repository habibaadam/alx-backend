#!/usr/bin/env python3
"""module that contains lifo caching system"""


from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """class for fifo caching"""

    def __init__(self):
        """initializes the class"""
        super().__init__()

    def put(self, key, item):
        """assigns or puts an item in the cache"""
        if key is None or item is None:
            return
        self.cache_data.update({key: item})

        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            removed_item = list(self.cache_data)[-2]
            del self.cache_data[removed_item]
            print("DISCARD: {}".format(removed_item))

    def get(self, key):
        """Get an item by key"""
        return self.cache_data.get(key)
