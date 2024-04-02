#!/usr/bin/env python3
"""module that contains lru caching system"""


from base_caching import BaseCaching
from datetime import datetime


class LRUCache(BaseCaching):
    """class for lru caching"""

    def __init__(self):
        """initializes the class"""
        super().__init__()
        self.cache_data_time = {}

    def put(self, key, item):
        """assigns or puts an item in the cache"""
        if key is None or item is None:
            return
        self.cache_data.update({key: item})

        if len(self.cache_data) > BaseCaching.MAX_ITEMS \
                and key not in self.cache_data.keys():
            removed_key = min(self.cache_data_time,
                              key=self.cache_data_time.get)
            del self.cache_data_time[removed_key]
            del self.cache_data[removed_key]
            print("DISCARD: {}".format(removed_key))

        self.cache_data.update({key: item})
        self.cache_data_time.update({key: datetime.today()})

    def get(self, key):
        """Get an item by key"""
        if self.cache_data.get(key) is None:
            return
        self.cache_data_time.update({key: datetime.today()})
        return self.cache_data.get(key)
